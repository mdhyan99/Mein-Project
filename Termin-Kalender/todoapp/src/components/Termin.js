import React,{useContext} from "react";
// import image from "./image/p1.webp";

import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import TerminContext from "../context/TerminContext";

const Termin = () => {
    const {termine,deletItem}=useContext(TerminContext)
    // const listItems = termine.length ? (
    //     termine.map((item) => {
    //         return (
    //             <div key={item.id}>
    //                 <span className="name">{item.name}</span>
    //                 <span className="datum">{item.datum}</span>
    //                 <span className="uhr">{item.uhr}</span>
    //                 <span className="beschreibung">{item.beschreibung}</span>
    //                 <span
    //                     className="action title"
    //                     onClick={() => deletItem(item.id)}
    //                 >
    //                     Löchen
    //                 </span>
    //             </div>
    //         );
    //     })
    // ) : (
    //     <p>es gibt kein Termine</p>
    // );
    return (
        <div className="text-center1" >
            {/* <img className="imges" src={image} alt={image} /> */}
            <Table   bordered hover size="sm" className="text-center">
            <thead>
                <tr >
                    <th >Name</th>
                    <th>Datum-Zeit</th>
                    <th>Beschreibung</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody className="color" >
               { 
              termine.length ? (
                termine.map((item) => {
                    return (
               <tr   key={item.id}>
                    <td  > {item.name}</td>
                    <td> {item.datum} {item.uhr}</td>
                    <td > {item.beschreibung}</td>
                    <td   
                        onClick={() => deletItem(item.id)}
                       
                        value="add"> <Button className="btn  "  variant="primary">Löchen</Button></td>
                </tr>
                            );
                        })
                    ) : (<tr>
                        es gibt keine Termine
                    </tr>)
                    }
            </tbody>
        </Table>
                <Link to="/">
                    <Button
                        className="btn-style"
                        variant="primary"
                        type="submit"
                        value="add"
                    >
                        Startseite
                    </Button>
                </Link>
            </div>
       
    );
};

export default Termin;
