import react,{useMemo} from "react"
import { useTable } from "react-table/dist/react-table.development"

const table =({data})=>{
    const columns=useMemo(()=>[
        {Header:"Name",accessor:"name"},
        {Header:"Last_name",accessor:"Last_name"}
    ],[])
}