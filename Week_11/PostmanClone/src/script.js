import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import axios from "axios";
import prettyBytes from "pretty-bytes";
import setupEditors from "./setupEditor";

const form = document.querySelector("[data-form]");
const queryParamsContainer = document.querySelector("[data-query-params]");
const requestHeadersContainer = document.querySelector(
  "[data-request-headers]",
);
const keyValueTemplate = document.querySelector("[data-key-value-template]");
const responseHeadersContainer = document.querySelector(
  "[data-response-headers]",
);

document
  .querySelector("[data-add-query-param-btn]")
  .addEventListener("click", () => {
    queryParamsContainer.append(createKeyValuePair());
  });

document
  .querySelector("[data-add-request-header-btn]")
  .addEventListener("click", () => {
    requestHeadersContainer.append(createKeyValuePair());
  });

queryParamsContainer.append(createKeyValuePair());
requestHeadersContainer.append(createKeyValuePair());

axios.interceptors.request.use((request) => {
  request.customData = request.customData || {};
  request.customData.startTime = Date.now();
  return request;
});

function updateEndTime(response) {
  response.customData = response.customData || {};
  response.customData.time = Date.now() - response.config.customData.startTime;
  return response;
}

axios.interceptors.response.use(updateEndTime, (e) =>
  Promise.reject(updateEndTime(e.response)),
);

const { requestEditor, updateResponseEditor } = setupEditors();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let data;
  try {
    data = JSON.parse(requestEditor.state.doc.toString() || null);
  } catch {
    alert("JSON data is malformed");
    return;
  }

  axios({
    url: document.querySelector("[data-url]").value,
    method: document.querySelector("[data-method]").value,
    params: keyValuePairsToObjects(queryParamsContainer),
    headers: keyValuePairsToObjects(requestHeadersContainer),
    data,
  })
    .catch((e) => e)
    .then((response) => {
      document
        .querySelector("[data-response-section]")
        .classList.remove("d-none");

      updateResponseDetails(response);
      updateResponseEditor(response.data);
      updateResponseHeaders(response.headers);
    });
});

function updateResponseDetails(response) {
  document.querySelector("[data-status]").textContent = response.status;
  document.querySelector("[data-time]").textContent = response.customData.time;
  document.querySelector("[data-size]").textContent = prettyBytes(
    JSON.stringify(response.data).length +
      JSON.stringify(response.headers).length,
  );
}

function updateResponseHeaders(headers) {
  responseHeadersContainer.innerHTML = "";
  Object.entries(headers).forEach(([key, value]) => {
    responseHeadersContainer.insertAdjacentHTML(
      "beforeend",
      `<div>${key}</div><div>${value}</div>`,
    );
  });
}

function createKeyValuePair() {
  const element = keyValueTemplate.content.cloneNode(true);
  element.querySelector("[data-remove-btn]").addEventListener("click", (e) => {
    e.target.closest("[data-key-value-pair]").remove();
  });
  return element;
}

function keyValuePairsToObjects(container) {
  return [...container.querySelectorAll("[data-key-value-pair]")].reduce(
    (data, pair) => {
      const key = pair.querySelector("[data-key]").value;
      const value = pair.querySelector("[data-value]").value;
      if (!key) return data;
      return { ...data, [key]: value };
    },
    {},
  );
}

