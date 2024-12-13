Instead of directly using `useNavigate` within a child component, the best solution is to pass the `navigate` function as a prop from a parent component that is within the router context.  Here's how you would modify the code:

```javascript
// App.js (or your main routing component)
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import ChildComponent from './ChildComponent';

function App() {
  const navigate = useNavigate();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage navigate={navigate} />}/>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// HomePage.js (this component now receives and pass the navigate function)

function HomePage({ navigate }) {
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => navigate('/page')}>Go to Page</button>
      <ChildComponent navigate={navigate} />
    </div>
  );
}

// ChildComponent.js
function ChildComponent({ navigate }) {
  return (
    <div>
      <button onClick={() => navigate('/page')}>Go to Page</button>
    </div>
  );
}
```
This approach ensures that `useNavigate` has the necessary context and works correctly.