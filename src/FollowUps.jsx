import './FollowUps.css'
import React, { useState, useEffect } from 'react';
import { db } from './firebase'; 
import { collection, query, where, orderBy, limit, getDocs } from 'firebase/firestore';
import LoadingSpinner from './LoadingSpinner';

// --- THIS IS THE UPDATED FUNCTION ---
// It's now much simpler. It just reformats the date string for display.
const formatFollowUpDate = (dateString) => {
    // If the date string is missing or invalid, show a placeholder.
    if (!dateString || typeof dateString !== 'string' || !dateString.includes('-')) {
        // This will also safely display any non-date text like "अगले हफ्ते"
        return dateString || 'No Date';
    }

    // Assuming the date from Firebase is "YYYY-MM-DD"
    const parts = dateString.split('-');

    // Check if it's in the expected format before trying to reformat
    if (parts.length === 3 && parts[0].length === 4) {
        // Return it in the more readable "DD-MM-YYYY" format
        return `${parts[2]}-${parts[1]}-${parts[0]}`;
    }

    // If it's not in the expected format, just show the original string
    return dateString;
};


const FollowUps = ({ userId }) => {
    const [followUps, setFollowUps] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFollowUps = async () => {
            if (!userId) {
                setLoading(false);
                return;
            }
            try {
                const today = new Date().toISOString().split('T')[0];
                const visitsRef = collection(db, 'users', userId, 'visits');

                const q = query(
                    visitsRef,
                    where('treatment.nextFollowUp', '>=', today),
                    orderBy('treatment.nextFollowUp'),
                    limit(5)
                );

                const querySnapshot = await getDocs(q);

                const followUpsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    patientName: doc.data().basicInfo?.patientName || 'Unknown Patient',
                    followUpDate: doc.data().treatment.nextFollowUp
                }));
                
                setFollowUps(followUpsData);

            } catch (error) {
                console.error("Error fetching follow-ups: ", error);
            } finally {
                setLoading(false);
            }
        };
        fetchFollowUps();
    }, [userId]);

    if (loading) {
        return  <LoadingSpinner />;
    }

    return (
        <div className="follow-ups-container">
            <h3>Upcoming Follow-ups</h3>
            {followUps.length > 0 ? (
                <ul className="follow-ups-list">
                    {followUps.map(followUp => (
                        <li key={followUp.id} className="follow-up-item">
                            <span className="patient-name">{followUp.patientName}</span>
                            {/* This now displays the clean, formatted date */}
                            <span className="follow-up-date">{formatFollowUpDate(followUp.followUpDate)}</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No upcoming follow-ups scheduled.</p>
            )}
        </div>
    );
};

export default FollowUps;
