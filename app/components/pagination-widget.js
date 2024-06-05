import React from 'react';
import { BottomNavigation, Pagination } from '@mui/material';

export default function PaginationWidget({ page, maxPage, onPageChange }) {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '20px'}}>

      <Pagination
        count={maxPage}
        page={page}
        onChange={(event, value) => onPageChange(value)}
        color="primary"
        style={{ margin: '20px', position: 'static' }}
      />

    </div>
        </>
    );
}