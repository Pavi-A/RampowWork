import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Table.css'; // Import your CSS file for table styling

function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://fe-test.dev.rampnow.io:8000/api/books?page=1&limit=10');
      setData(response.data.data); // Set the fetched data to state
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h2>Books</h2>
      <table className="book-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Author</th>
            <th>Country</th>
            <th>Language</th>
            <th>Link</th>
            <th>Pages</th>
            <th>Title</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
  {data.map((item, index) => (
    <tr key={index + 1}>
      <td>{index + 1}</td> {/* Increment index by 1 */}
      <td>{item.author}</td>
      <td>{item.country}</td>
      <td>{item.language}</td>
      <td><a href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</a></td>
      <td>{item.pages}</td>
      <td>{item.title}</td>
      <td>{item.year}</td>
    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
}

export default Table;
