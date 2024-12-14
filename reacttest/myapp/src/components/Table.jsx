import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
function Table(){
    return(
        <div>
            <table border="2">
                <TableHeader/>
                <TableBody/>
            </table>
        </div>
    )
}
export default Table;