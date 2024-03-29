import React, { useContext } from "react";
import TerminContext from "../context/TerminContext";
import { Table,Button } from "react-bootstrap";
const TerminListe = () => {
    const { termine, deletItem } = useContext(TerminContext);

    return (
        <Table  bordered hover className="text-center1">
            <thead>
                <tr >
                    <th >Monat</th>
                    <th>Datum</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody className="color text-center1" >
               { 
              termine.length ? (
                termine.map((item,i) => {
                    return (
               <tr  key={i}>
                    <td > {item.name}</td>
                    <td > {item.datum}</td>
                    <td   
                        onClick={() => deletItem(item.id)}
                    > <Button className="btn  "  variant="primary">Löchen</Button></td>
                </tr>
                            );
                        })
                    ) : (<tr >
                     es gibt keine Termine
                    </tr>)
                    
                       
                    }
            </tbody>
        </Table>
    );
};

export default TerminListe;
