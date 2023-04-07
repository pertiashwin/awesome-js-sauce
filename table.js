import React from 'react';

export default function t1({ details, uniqueRelLabels }) {
  console.log("details-----==", details);

  return (
    <div className="App2">
      <table>
        {Array.from(uniqueRelLabels).map(relLabel => (
          <>
            <tr>
              <th>{relLabel}</th>
            </tr>
            {
              details.map((item, index) => {
                if (item?.rel?.label === relLabel) {
                  return (
                    <tr key={index}>
                      <td>{item?.end?.language} {item?.start?.label}</td>
                      <td>{item?.rel?.label}</td>
                    </tr>
                  );
                }
                return null;
              })}
          </>))}
      </table>
    </div>
  );
}