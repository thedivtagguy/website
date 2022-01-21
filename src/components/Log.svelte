<script>
    // Import d3
import * as d3 from 'd3';
// IMport timelines
import * as d3timelines from 'd3-timelines'
import { onMount } from 'svelte';
export let timelines;
const projects = [];
// projects should have the following format:
// {
//  label: title,
//  times : [
//      {"starting_time": created_at, "ending_time": updated_at},
//      {"starting_time": created_at, "ending_time": updated_at},
//      ...
//  ]
// }

const colors = [
    '#f85e00',
    '#623CEA',
    '#272838'

]


timelines.forEach((project, i) => {
    projects.push(
    {
        label: project.title,
        times: [
            {
                // Keep only the date
                // Choose a color
                color: colors[i],
                starting_time: new Date(project.created_at),
                ending_time: project.closed_at ? new Date(project.closed_at) : new Date(project.updated_at)
            }
        ]
    })
})

// Keep only three projects
projects.splice(3)
console.log(projects);

onMount(() => {

let chart = d3timelines.timelines().stack().tickFormat( {
    format: d3.timeFormat("%b %d"),
    tickInterval: 4
    }
    ).margin({
    top: 20,
    right: 10,
    bottom: 10,
    left: 130
});

const svg = d3.select('#timeline')
    .append('svg')
    .attr('height', '100%')
    .attr('width', '100%')
    .datum(projects)
    .call(chart);

    // Shift ticks down 
svg.selectAll('.tick text')
    .attr('transform', 'translate(0, 10)');

// Add title
svg.append('text')
    .attr('x', 
   // Left align
    chart.margin().left - 20    )
    .attr('y', 20)
    .attr('text-anchor', 'middle')
    // Add class for css styling
    .attr('class', 'font-serif text-gray-700 font-bold text-lg')
    .style('font-size', '20px')
    .style('color', '#333')
    .text('What am I working on?');

svg.selectAll('.timeline-label text')
    .attr('class', 'font-serif text-gray-700 font-bold text-lg');

});





</script>

<style>
    .timeline-xAxis {
        padding-top: 50px;
    }
    .tick {
    /* Shift down by 30px */
    transform: translate(0, -30px);
}
</style>

<main class="py-8 w-full">
    <div id="timeline" class="w-full overflow-auto"></div>   
</main>