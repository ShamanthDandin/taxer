import React, { useState, useEffect } from 'react';
import AgeGroup from './Form/AgeGroup';
import Deduction from './Form/Deduction';
import IncomeDetails from './Form/IncomeDetails';
import PayeeDetails from './Form/PayeeDetails';
import PayTaxes from './Form/PayTaxes';

const Form = () => {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        ageGroup: [],
        deduction: [],
        incomeDetails: [],
        payeeDetails: [],
        payTaxes: []
    });
    const [calculatedTax, setCalculatedTax] = useState(null);

    const handleNext = (data) => {
        setFormData((prevData) => ({
            ...prevData,
            ...data
        }));
        setStep((prevStep) => prevStep + 1);
    };

    const handleFinalSubmit = () => {
        console.log("Final form data:", JSON.stringify(formData));
        alert("Form submitted successfully!");
    };

  
    const calculateTax = () => {
        const income = parseFloat(formData.incomeDetails[0] || 0) || 0;
        const deductions = formData.deduction.reduce((sum, val) => sum + parseFloat(val || 0), 0);

   
        const ageGroup = formData.ageGroup[0] || "0-60";
        let ageExemption = 0;
        if (ageGroup === "60-80") {
            ageExemption = 50000; 
        } else if (ageGroup === "80+") {
            ageExemption = 100000;
        }

        const taxableIncome = Math.max(income - deductions - ageExemption, 0);

        let tax = 0;
        if (taxableIncome <= 300000) {
            tax = 0;
        } else if (taxableIncome <= 600000) {
            tax = (taxableIncome - 300000) * 0.05;
        } else if (taxableIncome <= 900000) {
            tax = (300000 * 0.05) + (taxableIncome - 600000) * 0.1;
        } else if (taxableIncome <= 1200000) {
            tax = (300000 * 0.05) + (300000 * 0.1) + (taxableIncome - 900000) * 0.15;
        } else if (taxableIncome <= 1500000) {
            tax = (300000 * 0.05) + (300000 * 0.1) + (300000 * 0.15) + (taxableIncome - 1200000) * 0.2;
        } else {
            tax = (300000 * 0.05) + (300000 * 0.1) + (300000 * 0.15) + (300000 * 0.2) + (taxableIncome - 1500000) * 0.3;
        }

        return tax.toFixed(2);
    };

    useEffect(() => {
        if (step === 4 && calculatedTax === null) {
            setCalculatedTax(calculateTax());
        }
    }, [step, formData, calculatedTax]);

    const renderStep = () => {
        switch (step) {
            case 0:
                return <PayeeDetails onSubmit={(data) => handleNext({ payeeDetails: data })} />;
            case 1:
                return <IncomeDetails onSubmit={(data) => handleNext({ incomeDetails: data })} />;
            case 2:
                return <Deduction onSubmit={(data) => handleNext({ deduction: data })} />;
            case 3:
                return <AgeGroup onSubmit={(data) => handleNext({ ageGroup: data })} />;
            case 4:
                return (
                        <PayTaxes
                        name={formData.payeeDetails[0]}
                        panCard={formData.payeeDetails[1]}
                        tax={calculatedTax * 1.04}
                        formData={formData} 
                        onSubmit={handleFinalSubmit}
                         />

                );
            default:
                return <button onClick={handleFinalSubmit}>Submit All Data</button>;
        }
    };

    return (
        <div className="flex justify-center h-full w-full">
            <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
                {renderStep()}
            </div>
        </div>
    );
};

export default Form;
