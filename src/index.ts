import { range } from "rxjs";
import { map, filter } from "rxjs/operators";

const ob$ = range(1, 10)
  .pipe(filter(x => x % 2 === 0))
  .pipe(map(x => x * 10));

ob$.subscribe(resp => console.log("Número", resp));
