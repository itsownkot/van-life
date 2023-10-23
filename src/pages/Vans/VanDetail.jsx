import React from "react";
import {
  Link,
  useLocation,
  useLoaderData,
  Await,
  defer,
} from "react-router-dom";
import { getVan } from "../../api";

export function loader({ params }) {
  return defer({ van: getVan(params.id) });
}

export default function VanDetail() {
  const loaderData = useLoaderData();
  const location = useLocation();
  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <div className="van-detail-container">
      <React.Suspense fallback={<h3>Loading van...</h3>}>
        <Await resolve={loaderData.van}>
          {(van) => {
            return (
              <div className="van-detail">
                <Link
                  className="back-button"
                  to={`..?${search}`}
                  relative="path"
                >
                  &larr; Back to {type} vans
                </Link>
                <img src={van.imageUrl} />
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                <h2>{van.name}</h2>
                <p className="van-price">
                  <span>${van.price}</span>/day
                </p>
                <p>{van.description}</p>
                <button className="link-button">Rent this van</button>
              </div>
            );
          }}
        </Await>
      </React.Suspense>
    </div>
  );
}
