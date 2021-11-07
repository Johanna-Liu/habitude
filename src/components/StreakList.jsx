import React from "react";
import Streak from "./Streak";

const StreakList = () => {
  return (
    <div>
      <div className="p-4 rounded-lg bg-green-600"> 
        <div className="text-white"> 
          <div className="flex flex-row space-x-1">
            <div className="font-serif text-xl font-medium">
              Longest Streaks
            </div>
            <button>+</button>
          </div>
          <div className="text-sm flex flex-row italic">
            <Streak />: 200 days
          </div>
        </div>
        <div className="mt-3 p-3 rounded-lg bg-green-50">
          <table class="table-auto w-full">
            <tbody>
              <tr>
                <td class="px-5 py-2 w-1/12">1</td>
                <td><Streak /></td>
                <td>200🔥</td>
              </tr>
              <tr>
                <td class="px-5 py-2">2</td>
                <td><Streak /></td>
                <td>100🔥</td>
              </tr>
              <tr>
                <td class="px-5 py-2">3</td>
                <td><Streak /></td>
                <td>50🔥</td>
              </tr>
              <tr>
                <td class="px-5 py-2">4</td>
                <td><Streak /></td>
                <td>25🔥</td>
              </tr>
              <tr>
                <td class="px-5 py-2">5</td>
                <td><Streak /></td>
                <td>1🔥</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StreakList;
