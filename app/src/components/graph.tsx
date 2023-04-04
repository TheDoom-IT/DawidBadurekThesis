import * as d3 from 'd3';
import { PieArcDatum } from 'd3';
import { useEffect, useRef } from 'react';
import { SelectedSourceObject } from '../types/selected-source';
import './../styles/app/graph.css';

interface GraphProps {
    selectedSources: SelectedSourceObject;
}

export const Graph = ({ selectedSources }: GraphProps) => {
    const svgRef = useRef<SVGSVGElement>(null);
    const svgId = 'graphSvg';

    useEffect(() => {
        if (!svgRef.current) {
            return;
        }
        const { width, height } = svgRef.current.getBoundingClientRect();
        const radius = Math.min(width, height) / 2;
        const data = Object.values(selectedSources).filter((value) => value.selected === true);

        const svg = d3.select(`#${svgId}`);
        svg.select('g').remove();
        const g = svg
            .append('g')
            .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

        const colors = d3
            .scaleOrdinal(d3.schemeCategory10)
            .domain(data.map((el) => el.count.toString()));

        const pie = d3.pie<SelectedSourceObject[string]>().value((d) => d.count)(data);
        const allPaths = g.selectAll('path').data(pie).enter();

        const arc = d3
            .arc<PieArcDatum<SelectedSourceObject[string]>>()
            .innerRadius(0)
            .outerRadius(radius);

        allPaths
            .append('path')
            .attr('d', arc)
            .attr('fill', (d) => colors(d.data.count.toString()));

        allPaths
            .append('text')
            .text((d) => d.data.name)
            .attr('transform', (d) => 'translate(' + arc.centroid(d) + ')')
            .style('font-family', 'arial')
            .style('font-size', 15);
    }, [selectedSources]);

    return (
        <div className="box graph">
            <h3 className="text-center">Sources distribution</h3>
            <svg id={svgId} ref={svgRef}></svg>
        </div>
    );
};
