import {
	red,
	green,
	blue,
	bgBlack,
} from "https://deno.land/std@0.193.0/fmt/colors.ts";

console.log(bgBlack(`${red("red")} ${green("green")} ${blue("blue")}`));
