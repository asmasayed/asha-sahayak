// In DownloadSummary.jsx

import React, { useState } from 'react';

const getTodayString = () => {
  const today = new Date();
  const offset = today.getTimezoneOffset();
  const todayWithOffset = new Date(today.getTime() - (offset * 60 * 1000));
  return todayWithOffset.toISOString().split('T')[0];
};

const DownloadSummary = ({ visits, showToast }) => {
  const [selectedDate, setSelectedDate] = useState(getTodayString());

  const handleDownload = () => {
    const [year, month, day] = selectedDate.split('-');
    const formattedPickerDate = `${parseInt(day, 10)}/${parseInt(month, 10)}/${year}`;
    const visitsForDate = visits.filter(visit => visit.basicInfo?.visitDate === formattedPickerDate);

    if (visitsForDate.length === 0) {
      showToast(`No visits found for ${formattedPickerDate}.`, 'error');
      return;
    }
    
    // ... rest of the handleDownload function
    const headers = ["Patient Name", "Age", "Gender", "Mobile", "Address", "Visit Type", "Symptoms", "Medicine Provided", "Next Follow-up"];
    const csvRows = visitsForDate.map(visit => {
        const basicInfo = visit.basicInfo || {};
        const generalHealth = visit.generalHealth || {};
        const treatment = visit.treatment || {};
        const row = [
            `"${basicInfo.patientName || ''}"`,
            `"${basicInfo.age || ''}"`,
            `"${basicInfo.gender || ''}"`,
            `"${basicInfo.mobile || ''}"`,
            `"${basicInfo.address || ''}"`,
            `"${visit.visitType || 'General'}"`,
            `"${(generalHealth.currentSymptoms || []).join(', ')}"`,
            `"${(treatment.medicineProvided || []).join(', ')}"`,
            `"${treatment.nextFollowUp || ''}"`
        ];
        return row.join(',');
    });
    const csvString = [headers.join(','), ...csvRows].join('\n');
    const blob = new Blob(['\uFEFF' + csvString], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `ASHA_Visits_${selectedDate}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast(`Report for ${formattedPickerDate} downloaded successfully!`, 'success');
  };

  return (
    <div className="card download-summary-card">
      <h3>Download Daily Summary</h3>
      <div className="download-controls">
        <input 
          type="date" 
          className="date-input"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          max={getTodayString()}
        />
        <button className="btn btn-primary" onClick={handleDownload}>
          Download Report
        </button>
      </div>
    </div>
  );
};

// Make sure this line is at the very end of the file!
export default DownloadSummary;