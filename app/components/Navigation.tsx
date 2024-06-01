import React, { useState } from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

type NavigationProps = {
    onAddContact: () => void;
}

export default function Navigation({
    onAddContact
}: NavigationProps) {

    return (
        <div className='flex justify-between items-center bg-white px-5 py-4 mb-5 shadow-sm rounded-xl'>
            <div className='flex items-center'>
                <h1 className="flex items-center font-semibold text-lg  bg-blue-500 h-10 px-2 text-white rounded-s-lg">
                    OBS
                </h1>
                <span className='text-sm flex items-center bg-yellow-500 h-10 px-2 text-white rounded-e-lg'>Contact Manager</span>
            </div>
            <Button type="primary" onClick={onAddContact} className='flex items-center py-4'>
                <PlusOutlined /> 
                <span className='hidden lg:block'>ADD CONTACT</span>
            </Button>
        </div>
    )
};
