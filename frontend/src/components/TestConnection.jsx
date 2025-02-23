import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TestConnection = () => {
    const [messages, setMessages] = useState({
        root: 'Testando raiz...',
        api: 'Testando API...',
        test: 'Testando conexão...'
    });

    useEffect(() => {
        const testRoutes = async () => {
            try {
                console.log('URL da API:', import.meta.env.VITE_API_URL);
                console.log('URL Base da API:', import.meta.env.VITE_API_BASE_URL);

                try {
                    const rootResponse = await axios.get(import.meta.env.VITE_API_URL);
                    setMessages(prev => ({ ...prev, root: `Raiz: ${rootResponse.data.message}` }));
                } catch (error) {
                    console.error('Erro na rota raiz:', error);
                    setMessages(prev => ({ ...prev, root: `Erro na rota raiz: ${error.message}` }));
                }

                try {
                    const apiResponse = await axios.get(`${import.meta.env.VITE_API_BASE_URL}`);
                    setMessages(prev => ({ ...prev, api: `API: ${apiResponse.data.message}` }));
                } catch (error) {
                    console.error('Erro na rota API:', error);
                    setMessages(prev => ({ ...prev, api: `Erro na rota API: ${error.message}` }));
                }

                try {
                    const testResponse = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/test-connection`);
                    setMessages(prev => ({ ...prev, test: `Teste: ${testResponse.data.message}` }));
                } catch (error) {
                    console.error('Erro na rota test-connection:', error);
                    setMessages(prev => ({ ...prev, test: `Erro na rota test-connection: ${error.message}` }));
                }

            } catch (err) {
                console.error('Erro geral:', err);
                setMessages(prev => ({
                    ...prev,
                    error: `Erro na conexão com o backend: ${err.message}`
                }));
            }
        };

        testRoutes();
    }, []);

    return (
        <div>
            {messages.error ? (
                <p style={{ color: 'red' }}>{messages.error}</p>
            ) : (
                <div style={{ textAlign: 'left' }}>
                    <p style={{ color: messages.root.includes('Erro') ? 'red' : 'green' }}>{messages.root}</p>
                    <p style={{ color: messages.api.includes('Erro') ? 'red' : 'green' }}>{messages.api}</p>
                    <p style={{ color: messages.test.includes('Erro') ? 'red' : 'green' }}>{messages.test}</p>
                </div>
            )}
        </div>
    );
};

export default TestConnection;
