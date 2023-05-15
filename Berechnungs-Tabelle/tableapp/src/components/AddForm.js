import React, { useContext } from "react";
import { Table, Button } from "react-bootstrap";
import FormContext from "../context/FormContext";


const AddForm = ({summe1}) => {
    const {form} = useContext(FormContext);
    return (
        <Table bordered hover className="text-center1">
            <thead>
                <tr>
                    <th>Datum</th>
                    <th>price</th>
                    <th>Menge</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody className="color text-center1">
                {form.length ? (
                    form.map((item) => {
  

                        return (
                            <tr key={item.id}>
                                <td> {item.artikel}</td>
                                <td> {item.price}</td>
                                <td> {item.menge}</td>
                                <td> {summe1}</td>
                                <td >
                                    {" "}
                                    <Button className="btn  " variant="primary">
                                        Löchen
                                    </Button>
                                </td>
                            </tr>
                        );
                    })
                ) : (
                    <tr>es gibt keine neu Table</tr>
                )}
            </tbody>
        </Table>
    );
};

export default AddForm;
