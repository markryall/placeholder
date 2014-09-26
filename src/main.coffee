React = require 'react'
App = require './App'

global.React = React

React.renderComponent App(), document.body
