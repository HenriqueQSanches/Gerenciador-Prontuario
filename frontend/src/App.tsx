import React from 'react';
import TestConnection from './components/TestConnection';

function App() {
  return (
    <div style={{ 
      textAlign: 'center', 
      marginTop: '50px',
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: '#333', marginBottom: '30px' }}>
        Teste de Conexão Backend + Frontend
      </h1>
      <div style={{ 
        padding: '20px', 
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9'
      }}>
        <TestConnection />
      </div>
    </div>
  );
}

export default App;
