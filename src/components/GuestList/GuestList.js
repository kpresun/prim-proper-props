import React, { Component } from 'react';


function GuestList (props) {
    return (
        <>
        {props.list.map(guest => (
            <tr key={guest.id}>
              <td>{guest.name}</td>
              <td>{String(guest.kidsMeal)}</td>
            </tr>
          ))}
        </>
    )
}

export default GuestList;
