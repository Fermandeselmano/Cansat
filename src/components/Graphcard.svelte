<script lang="ts">
    import { Card, P, Chart } from "flowbite-svelte";
    import { infoRows, type Cansat } from "../routes/global";
    import { onDestroy } from "svelte";

    export let title: string = "Default";
    export let value: string = "0.00";
    export let href: string = "#";
    export let y_key: keyof Cansat;

    let x_data: any[] = $infoRows.map((row) => row.time.split(" ")[1]);
    let y_data: any[] = $infoRows.map((row) => row[y_key]);

    let options = {
        chart: {
            type: "area",
            fontFamily: "Inter, sans-serif",
            dropShadow: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
            animations: {
                enabled: false,
            },
        },
        tooltip: {
            enabled: true,
            x: {
                show: false,
            },
        },
        fill: {
            type: "gradient",
            gradient: {
                opacityFrom: 0.55,
                opacityTo: 0,
                shade: "#1C64F2",
                gradientToColors: ["#1C64F2"],
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: 6,
        },
        grid: {
            show: false,
            strokeDashArray: 4,
            padding: {
                left: 2,
                right: 2,
                top: 0,
            },
        },
        series: [
            {
                name: "Temperatura",
                data: $infoRows.map((row) => row[y_key]).reverse(),
                color: "#1A56DB",
            },
        ],
        xaxis: {
            categories: $infoRows.map((row) => row.time).reverse().map((time) => time.split(" ")[1]),
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: true,
            },
        },
        yaxis: {
            show: false,
        },
    };

    const sub = infoRows.subscribe((value) => {
        options = {
            ...options,
            series: [
                {
                    name: y_key,
                    data: value.map((row) => row[y_key]).reverse(),
                    color: "#1A56DB",
                },
            ],
        };
    });

    onDestroy(() => {
        sub();
    });
</script>

<Card
  href={href}
  class="flex flex-col flex-grow justify-between gap-2 w-full h-full p-4 !max-w-full"
>
  <div class="flex-grow min-h-0">
    <Chart {options} class="w-full h-full" />
  </div>
  <div class="text-center mt-4">
    <P class="font-semibold text-4xl">{value}</P>
    <P class="font-bold text-xl">{title}</P>
  </div>
</Card>
