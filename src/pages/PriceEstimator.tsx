
import React, { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import PriceEstimatorTool from '@/components/pricing/PriceEstimatorTool';

const PriceEstimator = () => {
  return (
    <PageLayout>
      <div className="bg-primary bg-opacity-5 py-12">
        <div className="page-container text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Price Estimator
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Calculate the cost of your laundry service before booking. Select items and quantities to see your total.
          </p>
        </div>
      </div>
      
      <div className="page-container py-6">
        <PriceEstimatorTool />
      </div>
    </PageLayout>
  );
};

export default PriceEstimator;
