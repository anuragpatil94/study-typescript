import { CSVFileReader } from "./CSVFileReader";
import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";

// New Tuple
type MatchData = [Date, string, string, number, number, MatchResult, string];
export class MatchReader extends CSVFileReader<MatchData> {
  constructor(public filename: string) {
    super(filename);
  }

  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6]
    ];
  }
}
