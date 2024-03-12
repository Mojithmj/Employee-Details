import React from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "./Emptable.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Emptable() {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const getdata = () => {
    axios
      .get("http://localhost:4000/all")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((err) => {
        setData(err);
      });
  };

  const alldel = (empid) => {
    axios.post("http://localhost:4000/delone/" + empid).then((response) => {
      console.log(response);
      getdata();
    });
  };

  useEffect(() => {
    getdata();
  }, []);

  const viewonedata = (id) => {
    navigate("/Empedit/"+id);
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr class="table-danger">
            <th>Sl.No</th>
            <th>Full Name</th>
            <th>Age</th>
            <th>Place</th>
            <th></th>
          </tr>
        </thead>
        {data.map((value, index) => (
          <tbody>
            <tr>
              <td>{index + 1}</td>
              <td>{value.name}</td>
              <td>{value.age}</td>
              <td>{value.place}</td>

              
                <Button
                  variant="outline-warning"
                  onClick={() => {
                    viewonedata(value._id);
                  }}
                >
                  Edit
                </Button>
              
              <Button
                variant="outline-danger"
                onClick={() => {
                  alldel(value._id);
                }}
              >
                Delete
              </Button>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
}

export default Emptable;
