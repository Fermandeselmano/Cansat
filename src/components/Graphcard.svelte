<script lang="ts">
    import { Card, Chart, P } from "flowbite-svelte";
    import { infoRows, type Cansat } from "../routes/global";
    import { onDestroy } from "svelte";

    export let title: string = "Default";
    export let y_key: keyof Cansat;

    let x_data: any[] = $infoRows.map((row) => row.time.split(" ")[1]);
    let y_data: any[] = $infoRows.map((row) => row[y_key]);

    let options = {
        chart: {
            height: "100%",
            maxWidth: "100%",
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
            show: true,
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
                show: true,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: true,
            },
        },
        yaxis: {
            show: true,
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

<Card size="none" class="h-full">
    <P class="font-bold text-xl text-center">{title}</P>
    <Chart {options} class="h-full" />
</Card>