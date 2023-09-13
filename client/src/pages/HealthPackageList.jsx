import React from 'react';
import { Link } from 'react-router-dom';
import { healthPackagesArray } from './HealthPackages';
import populartest01 from "../Images/test-image-01.avif";
import "../Styles/HealthPackageList.css"
const HealthPackagesList = () => {
    return (
        <div className="packages-list">
            <h2>Available Health Packages</h2>
            <div className="packages-grid">
                {healthPackagesArray.map(pkg => (
                    <div key={pkg.id} className="package-card">
                        <Link to={`/health/${pkg.id}`} className="package-link">
                            <img src={pkg.imgUrl} alt={pkg.productName} className="package-image" />
                            <div className="package-name">{pkg.productName}</div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HealthPackagesList;
