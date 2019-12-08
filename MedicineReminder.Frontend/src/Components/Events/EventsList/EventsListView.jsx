import React from "react";
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead, MDBContainer, MDBRow, MDBCol, MDBCard, MDBIcon, MDBNavLink } from 'mdbreact';
import './EventsList.css';
const EventsListView = ({events, onDelete}) => {

    const columns= [
    {
      label: 'Id',
      field: 'id',
      sort: 'asc'
    },
    {
      label: 'Nazwa',
      field: 'name',
      sort: 'asc'
    },
    {
      label: 'Opis',
      field: 'message',
      sort: 'asc'
    },
    {
      label: 'Data',
      field: 'date',
      sort: 'asc'
    },
    {
      label: '',
      field: 'handle',
      sort: 'asc'
    }
  ];

  let i = 0;
  const renderRows = events.map(event => {
    i++;
    return (
      <tr key={i}>
        <th>{i}</th>
        <th>{event.name}</th>
        <th>{event.message}</th>
        <th>{event.date}</th>
        <th>
          <span onClick={() => console.log("chce")}>
            <MDBIcon className="mr-5" icon="edit" />
          </span>
          <span onClick={() => onDelete(event.id)} >
            <MDBIcon icon="trash-alt" />
          </span>
        </th>
      </tr>
    );
  })

    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol className="mt-5">
                    <MDBCard>
                        <MDBTable btn>
                          <MDBTableHead columns={columns} />
                          <MDBTableBody>
                            {renderRows}
                          </MDBTableBody>
                        </MDBTable>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            <MDBRow >
                <MDBCol className="add-event mt-5">
                    <MDBNavLink to="/add-event">
                        <MDBBtn style={{ fontSize: '2rem' }}>+</MDBBtn>
                    </MDBNavLink>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        
    );
}

export default EventsListView;