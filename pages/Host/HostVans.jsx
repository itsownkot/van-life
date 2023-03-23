import React from "react"
import { Link, useLoaderData, Await, defer } from "react-router-dom"
import { getVans } from "../../api";

export function loader() {
    return defer({vans: getVans("/api/host/vans")})
}

export default function HostVans() {
    const loaderPromise = useLoaderData();

    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <React.Suspense fallback={<h3>Loading vans...</h3>}>
                <Await resolve={loaderPromise.vans}>
                    {(vans) => {
                        const hostVansEls = vans.map(van => (
                            <Link
                                to={van.id}
                                key={van.id}
                                className="host-van-link-wrapper"
                            >
                                <div className="host-van-single" key={van.id}>
                                    <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                                    <div className="host-van-info">
                                        <h3>{van.name}</h3>
                                        <p>${van.price}/day</p>
                                    </div>
                                </div>
                            </Link>
                        ))

                        return (
                            <div className="host-vans-list">
                                <section>
                                    {hostVansEls}
                                </section>
                            </div>
                        )
                    }}
                </Await>
            </React.Suspense>
        </section>
    )
}