import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export const Product = () => {
  const [Api, setApi] = useState([]);
  const [filtter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setLoading(true);

    axios
      .get("https://api.kalpav.com/api/v1/product/category/retail", {
        headers: {
          Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDg4ODY3MTcsImF1dGhlbnRpY2F0ZWRfdXNlciI6eyJpZCI6IjJjOWZhOGY1OGExYmJlYzYwMThhMjBlMjdiNTQwMTI0IiwidXNlcm5hbWUiOiJ0ZXN0NDVAeW9wbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJ0ZXN0IiwibGFzdE5hbWUiOiJ0ZXN0IiwiZW1haWwiOiJ0ZXN0NDVAeW9wbWFpbC5jb20iLCJtb2JpbGVOdW1iZXIiOiI5MDAwMDAwMDQ1IiwibmFtZSI6InRlc3QgdGVzdCIsInJvbGVzIjpbXSwic2VydmljZXMiOltdfSwidXNlcl9uYW1lIjoidGVzdDQ1QHlvcG1haWwuY29tITo6IVByb21pbG8iLCJqdGkiOiJiZmFmMmU0ZS1lNjk5LTRjOGItYWIyOC04NTViODgyYzNkOTgiLCJjbGllbnRfaWQiOiJQcm9taWxvIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIiwidHJ1c3QiXX0.1I8qK-huWE4aAobpC8EDbS-qf9M-mMOnrVVfYDUJFbE",
        },
      })
      .then((res) => {
        setLoading(false);
        setApi(res?.data?.response);
        setFilter(res?.data?.response);
      })
      .catch(() => {});
  }, []);

  const Loading = () => {
    return <h1 className="text-center">Loading.....</h1>;
  };

  const handleSearch = () => {
    const filteredData = Api.filter((product) =>
      product.productCategory.productCategoryName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilter(filteredData);
  };

  const filterdata = (cat) => {
    const update = Api.filter((x) => x.category === cat);
    setFilter(update);
  };

  const Showdata = () => {
    return (
      <>
        <div className="input-group mb-3 w-300" style={{ width: "300px" }}>
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-outline-secondary" type="button" onClick={handleSearch}>
            Search
          </button>
        </div>

        <div className="row justify-content-center">
          {filtter.map((product, index) => (
            <div className="card p-1 gap-3" key={index}>
              <div className="w-100 h-100">
                <img
                  src={product.productCategory.productCategoryImage}
                  className="card-img-top w-100 h-100"
                  alt="..#."
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{product.productCategory.productCategoryName}</h5>

                <button type="button" className="btn btn-primary">
                  Buy now
                </button>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center display-fx-bolder">Latest product</h1>
            <hr />
          </div>
          <div className="row-justify-content-center-4">{loading ? <Loading /> : <Showdata />}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
