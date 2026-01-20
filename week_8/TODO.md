# TODO for Profile Page Text Save Feature

## Tasks
- [ ] Add new POST endpoint `/save-text` in `public/server.js` to save data as text file in `public/textdata/`
- [ ] Add "Save as Text" button in `src/components/Profile.js` to call the new endpoint
- [ ] Test the functionality by running the server and clicking the button

## Details
- Endpoint: POST /save-text, body: { userid, data }, saves to public/textdata/${userid}.txt as key-value pairs
- Button: Fetches to http://localhost:5000/save-text with data from localStorage
