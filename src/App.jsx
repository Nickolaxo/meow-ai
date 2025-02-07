import { useState } from 'react';
import './App.css';
import catAvatar from './images/cat-avatar.png'

function CatChatbot() {
  const [text, setText] = useState('');
  const [chat, setChat] = useState([]);

  function generateMeow() {
    // Generate a random number of 'o's (between 1 and 8)
    const oCount = Math.floor(Math.random() * 8) + 1;
    const os = 'o'.repeat(oCount);
    
    // Generate a random number of exclamation marks (0 to 3)
    const exclCount = Math.floor(Math.random() * 4);
    const excls = '!'.repeat(exclCount);
    
    // Different meow variations
    const meowTypes = [
      `Me${os}w${excls}`,
      `Mr${os}w${excls}`,
      `Mrrr${os}p${excls}`,
      `Purr${os}${excls}`,
      `Mew${excls}`,
      `Nya${os}${excls}`,
    ];
    
    return meowTypes[Math.floor(Math.random() * meowTypes.length)];
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!text) return;
    
    setChat(oldChat => [...oldChat, 
      {id: Date.now(), message: text, sender: 'user'},
      {id: Date.now() + 1, message: generateMeow(), sender: 'cat'}
    ]);
    
    setText('');
  }

  return (
    <div style={{
      maxWidth: '400px',
      margin: '20px auto',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '12px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
        padding: '10px',
        backgroundColor: '#fff',
        borderRadius: '8px'
      }}>
        <img 
        src={catAvatar}  // We'll add the import for this
        alt="Cat AI"
        style={{
        width: '40px',
        height: '40px',
        marginRight: '10px',
        borderRadius: '50%'
      }}
    />
        <h2 style={{
          margin: 0,
          color: '#333',
          fontSize: '1.5em'
        }}>Meow AI</h2>
      </div>

      {/* Chat Area */}
      <div style={{
        height: '400px',
        overflowY: 'auto',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        marginBottom: '15px',
        padding: '15px',
        backgroundColor: '#fff'
      }}>
        {chat.map(msg => (
          <div key={msg.id} style={{
            marginBottom: '12px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start'
          }}>
            <div style={{
              maxWidth: '80%',
              padding: '10px 15px',
              borderRadius: msg.sender === 'user' ? '15px 15px 0 15px' : '15px 15px 15px 0',
              backgroundColor: msg.sender === 'user' ? '#007bff' : '#e9ecef',
              color: msg.sender === 'user' ? '#fff' : '#333',
              boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
            }}>
              {msg.message}
            </div>
          </div>
        ))}
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        gap: '10px'
      }}>
        <input 
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Say something to the cat..."
          style={{
            flex: 1,
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid #ddd',
            fontSize: '14px'
          }}
        />
        <button 
          type="submit"
          style={{
            padding: '12px 24px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold'
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav style={{
        backgroundColor: '#333',
        padding: '15px',
        marginBottom: '20px'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ color: 'white', fontSize: '20px' }}>Meow AI</div>
          <div>
            <a href="/" style={{
              color: 'white',
              textDecoration: 'none',
              marginRight: '20px'
            }}>Home</a>
            
            <a href="https://x.com/MeowAIToken" style={{
              color: 'white',
              textDecoration: 'none',
              marginRight: '20px'
            }}>Twitter</a>
            
            <a href="https://t.me/+LY4EgozXDc45ZmUx" style={{
              color: 'white',
              textDecoration: 'none',
              marginRight: '20px'
            }}>Telegram</a>
            
            <span style={{
              color: 'white',
              marginRight: '20px'
            }}>CA 🐱</span>
            
          </div>
        </div>
      </nav>

      <CatChatbot />
    </div>
  );
}

export default App;