import { MOODS } from "./moods";
import { sample } from "lodash";
import moment from "moment";

const days = [];

const numDays = Math.floor(Math.random() * 100) + 30;

const notes = [
  "Had a bad day at work",
  "Got a raise",
  "Finished a 5K",
  "Got in a fight with mom",
  "Went on a great first date",
  "Baked donuts",
  "Sally flew in for the weekend",
  "Sprained ankle",
  "Not much happened today",
  "Led a big presentation",
  "Binge watched a whole season of Game of Thrones",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  ""
];

const getMoods = () => {
  let date = moment().subtract(numDays, "days");
  for (let i = 0; i < numDays; i++) {
    days.push({
      mood: sample(MOODS),
      notes: sample(notes),
      month: date.format("MMM"),
      date: date.format("DD")
    });
    date = date.add(1, "days");
  }
  return days;
};

export const MOOD_DAYS = getMoods();
