import './App.css';
import Post from './Components/Post';
import Header from './Components/Header';
import Layout from './Components/Layout';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import IndexPage from "./Pages/Indexpage";
import UserContextProvider from "./Components/UserContext";
import CreatePost from "./Pages/CreatePost";
import PostPage from "./Pages/PostPage";

function App() {
  return (
    <UserContextProvider>
    <Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<IndexPage />} />
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
    <Route path="create" element={<CreatePost />} />
    <Route path="/post/:id" element={<PostPage />} />
  </Route>
</Routes>
    </UserContextProvider>
  );
}

export default App;
