import React from "react";
import ReactPaginate from "react-paginate";

const Paginations = ({ getPage ,  pageCount }) => {
    const handlePageClick = (data) => {
        // console.log(data);  // hier gibt uns {selected: 3} wenn wir auf button 4 klicken
        // console.log(data.selected);  // hier gibt uns  3 wenn wir auf button  4 klicken
        console.log(data.selected + 1); // hier gibt uns  4  wenn wir auf button  4 klicken
        getPage(data.selected + 1);
    };
    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="Next"
            onPageChange={handlePageClick}
            marginPagesDisplayed={2} // hier zeigt nur 2 seite vor Next
            pageRangeDisplayed={2} // hier zeigt nur 2  seite nach  Vorher
            pageCount={pageCount} // pageCount kommt von App.js
            previousLabel="Vorher"
            containerClassName="pagination justify-content-center"
            // für styling center und in gleiche liene
            pageLinkClassName="page-link" // macht border für seite nummber
            previousClassName="page-item"
            previousLinkClassName="page-link" // macht border für  button Vorher
            nextClassName="page-item"
            nextLinkClassName="page-link" // macht border für  button Next
            breakClassName="page-item"
            breakLinkClassName="page-link" // macht border für  button ...
            activeClassName="active"
        />
    );
};

export default Paginations;
