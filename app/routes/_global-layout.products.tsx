import React from 'react';
import { Outlet } from 'react-router-dom';

export default function productsLayout() {
    return (
        <div>
            products layout
            <Outlet />
        </div>
    );
}
