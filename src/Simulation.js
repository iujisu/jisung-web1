import React, { Component } from 'react';
import * as d3 from "d3";
import datas from "./testData";

class Simulation extends Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount() { //클래스가 마운트 되려할 때
        const color = d3.scaleOrdinal(d3.schemeAccent);

        this.svg = d3.select(this.myRef.current)
            .attr("width", "100%")
            .attr("height", "800")
         //   .style("border", "1px solid black")
        
        const ticked = () => {
            this.link
            .attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });
  
            this.node
            .attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; });
        }
        const dragstarted = (event,d) => {
          if (!event.active) this.simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
        }

        const dragged = (event,d) => {
          d.fx = event.x;
          d.fy = event.y;
        }
        const dragended = (event,d) => {
          if (!event.active) this.simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
        }


        this.simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id(function(d) { return d.id; }))
        .force("charge", d3.forceManyBody())
        .force("center", d3.forceCenter(1000 / 2, 800 / 2));

        this.link = this.svg.append("g")
          .attr("class", "links")
          .selectAll("line")
          .data(datas.links)
          .enter().append("line")
          .attr("stroke-width", function(d) { return Math.sqrt(d.value); });

        this.node = this.svg.append("g")
          .attr("class", "nodes")
          .selectAll("circle")
          .data(datas.nodes)
          .enter().append("circle")
          .attr("r", 5)
          .attr("fill", function(d) { return color(d.group); })
          .call(d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended)
              );

        this.node.append("title")
          .text(function(d) { return d.id; });
  
        this.simulation
          .nodes(datas.nodes)
          .on("tick", ticked);
  
        this.simulation.force("link")
          .links(datas.links);
    }

    render(){
        return (
          <div>
            <svg ref={this.myRef} height="4rem" color="#2f3e4d" ></svg>
          </div>
        );
    }
}
export default Simulation;