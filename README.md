# React Router v6 useNavigate Issue in Non-Route Components

This repository demonstrates a common issue encountered when using the `useNavigate` hook from `react-router-dom` v6 within components that aren't directly rendered by a route. The problem is that `useNavigate` relies on the router context, which may not be available in such components.

## Problem
The `brokenNavigation.jsx` file showcases the error.  The `ChildComponent` uses `useNavigate`, but since it's not directly rendered within a route's component tree, `useNavigate` returns null or throws an error.

## Solution
The solution demonstrated in `fixedNavigation.jsx` involves using the `useLocation` and `useNavigate` hooks inside the component where the navigation needs to be initiated. This provides the appropriate context. In addition, using a context wrapper is a good practice in this case to make sure that the useNavigate hook and its functionalities are accessible by components outside the routing context.