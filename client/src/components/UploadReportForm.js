// UploadReportForm.js
import React, { useState } from "react";
import axios from "axios";

function UploadReportForm({ orderId }) {

  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("report", file);

    try {
      await axios.post(
        `http://localhost:8080/api/orders/${orderId}/upload-report`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Report uploaded successfully!");
    } catch (error) {
      console.error("Error uploading report:", error);
      alert("Error uploading report. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="report" onChange={handleFileChange} required />
      <button type="submit">Upload Report</button>
    </form>
  );
}

export default UploadReportForm;
