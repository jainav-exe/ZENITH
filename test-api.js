
async function testChat() {
    try {
        console.log('Testing API...');
        const response = await fetch('http://localhost:3000/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                message: 'Hello, I am feeling a bit anxious.',
                history: []
            })
        });

        console.log('Status:', response.status);
        if (response.ok) {
            const data = await response.json();
            console.log('Response:', JSON.stringify(data, null, 2));
        } else {
            const text = await response.text();
            console.log('Error text:', text);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

testChat();
