import React from 'react';

const SplashScreen: React.FC = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900">
            <div className="text-white text-4xl">Loading...</div>
        </div>
    );
};
export default SplashScreen;