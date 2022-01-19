import React from 'react';
import ReactDom from 'react-dom';
import GifExpertApp from './GifExpertApp';
import './index.css';

const divRoot = document.querySelector('#root');

ReactDom.render(<GifExpertApp />, divRoot);
