import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'

var divStyle = {
  TextDecoration:'none'
};

export default () => (
    <div className="container">
      <div className="codrops-top clearfix">
        <a className="codrops-icon codrops-icon-prev" href="http://tympanus.net/Development/MorphingSearch/"><span>Previous Demo</span></a>
        <span className="right"><a className="codrops-icon codrops-icon-drop" href="http://tympanus.net/codrops/?p=21275"><span>Back to the Codrops Article</span></a></span>
      </div>
      <div className="content">
        <header className="codrops-header">
          <h1>Drag and Drop Interaction Ideas <span>Inspiration for drag and drop interactions for the modern UI</span></h1>
          <nav className="codrops-demos">
            <a href="index.html">Bottom Area</a>
            <a href="sidebar.html">Sidebar</a>
            <a href="page-scale.html">Page Scale</a>
            <a className="current-demo" href="modal.html">Modal</a>
            <a href="icons.html">Icons</a>
            <a href="bottoms-lide.html">Bottom Slide</a>
            <a href="reveal.html">Reveal</a>
          </nav>
        </header>
        <div id="grid" className="grid clearfix">
          <div className="grid__item"><i className="fa fa-fw fa-file-archive-o"></i></div>
          <div className="grid__item"><i className="fa fa-fw fa-file-image-o"></i></div>
          <div className="grid__item"><i className="fa fa-fw fa-file-word-o"></i></div>
          <div className="grid__item"><i className="fa fa-fw fa-file-excel-o"></i></div>
          <div className="grid__item"><i className="fa fa-fw fa-file-code-o"></i></div>
          <div className="grid__item"><i className="fa fa-fw fa-file-pdf-o"></i></div>
          <div className="grid__item"><i className="fa fa-fw fa-file-code-o"></i></div>
          <div className="grid__item"><i className="fa fa-fw fa-file-sound-o"></i></div>
          <div className="grid__item"><i className="fa fa-fw fa-file-video-o"></i></div>
          <div className="grid__item"><i className="fa fa-fw fa-file-archive-o"></i></div>
          <div className="grid__item"><i className="fa fa-fw fa-file-image-o"></i></div>
          <div className="grid__item"><i className="fa fa-fw fa-file-sound-o"></i></div>
        </div>
      </div>
    </div>
)