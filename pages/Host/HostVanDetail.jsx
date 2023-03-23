import React from "react"
import {
  Link,
  NavLink,
  Outlet,
  defer,
  Await,
  useLoaderData,
  useLocation
} from "react-router-dom";
import {getVans} from '../../api';

export function loader({params}) {
    return defer({van: getVans(`/api/host/vans/${params.id}`)})
}

export default function HostVanDetail() {
    const location = useLocation();
    const loaderPromise = useLoaderData();

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    function renderVanEl(currentVan) {
        return (
            <section>
                <Link
                    to={location.pathname.split('/').length > 4 ? "../.." : ".."}
                    relative="path"
                    className="back-button"
                >&larr; <span>Back to all vans</span></Link>

                <div className="host-van-detail-layout-container">
                    <div className="host-van-detail">
                        <img src={currentVan.imageUrl} />
                        <div className="host-van-detail-info-text">
                            <i
                                className={`van-type van-type-${currentVan.type}`}
                            >
                                {currentVan.type}
                            </i>
                            <h3>{currentVan.name}</h3>
                            <h4>${currentVan.price}/day</h4>
                        </div>
                    </div>

                    <nav className="host-van-detail-nav">
                        <NavLink
                            to="."
                            end
                            style={({ isActive }) => isActive ? activeStyles : null}
                        >
                            Details
                        </NavLink>
                        <NavLink
                            to="pricing"
                            style={({ isActive }) => isActive ? activeStyles : null}
                        >
                            Pricing
                        </NavLink>
                        <NavLink
                            to="photos"
                            style={({ isActive }) => isActive ? activeStyles : null}
                        >
                            Photos
                        </NavLink>
                    </nav>
                    <Outlet context={{ currentVan }} />
                </div>
            </section>
        )
    }

    return (
        <React.Suspense fallback={<h3>Loading van...</h3>}>
            <Await resolve={loaderPromise.van}>
                {renderVanEl}
            </Await>
        </React.Suspense>
    )
}