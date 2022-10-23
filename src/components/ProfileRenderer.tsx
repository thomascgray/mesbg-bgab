import { iHeroModelInArmy, iModelInArmy } from "../data/models";
import { getActiveWargear, getProfileActiveStats } from "../utils";
import { HeroAttributeRenderer } from "./HeroAttributeRenderer";
import * as State from "../state";
import React from "react";
import * as Pluralize from "pluralize";

export interface iProfileRendererProps {
  model: iHeroModelInArmy | iModelInArmy;
}

export const ProfileRenderer = (props: iProfileRendererProps) => {
  const { model } = props;
  const activeWargearNames = getActiveWargear(model, {
    excludeDefault: true,
  }).map((w) => w.name);

  return (
    <div>
      <div>
        {/* heroes */}
        {model.heroLevel !== undefined && (
          <React.Fragment>
            <span className="font-bold">{model.name}</span>
            {activeWargearNames.length >= 1 && (
              <span className="ml-1 font-bold">
                w/ {activeWargearNames.join(", ")}
              </span>
            )}
          </React.Fragment>
        )}
        {/* warriors */}
        {model.heroLevel === undefined && (
          <React.Fragment>
            <span>{model.quantity} * </span>
            <span>{model.name}</span>
            {activeWargearNames.length >= 1 && (
              <span className="ml-1">w/ {activeWargearNames.join(", ")}</span>
            )}
          </React.Fragment>
        )}
      </div>

      {model.profiles === undefined && (
        <div className="flex flex-row items-center space-x-8">
          <table className="table-fixed border-collapse border-spacing-0">
            <thead>
              <tr className="text-sm font-normal">
                <th className="w-6 text-left">Mv</th>
                <th className="w-14 text-center">F</th>
                <th className="w-8 text-left">S</th>
                <th className="w-8 text-left">D</th>
                <th className="w-8 text-left">A</th>
                <th className="w-8 text-left">W</th>
                <th className="w-8 text-left">C</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="">{model.stats!.Mv}''</td>
                <td className="text-center">
                  {model.stats!.F1}/{model.stats!.F1}+
                </td>
                <td className="">{model.stats!.S}</td>
                <td className="">{model.stats!.D}</td>
                <td className="">{model.stats!.A}</td>
                <td className="">{model.stats!.W}</td>
                <td className="">{model.stats!.C}</td>
              </tr>
            </tbody>
          </table>
          {model.stats!.Mi !== undefined &&
            model.stats!.Wi !== undefined &&
            model.stats!.Fa !== undefined && (
              <table>
                <thead>
                  <tr>
                    <th className="">M</th>
                    <th className="">W</th>
                    <th className="">F</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="">
                      <HeroAttributeRenderer value={model.stats!.Mi} />
                    </td>
                    <td className="">
                      <HeroAttributeRenderer value={model.stats!.Wi} />
                    </td>
                    <td className="">
                      <HeroAttributeRenderer value={model.stats!.Fa} />
                    </td>
                  </tr>
                </tbody>
              </table>
            )}
        </div>
      )}

      {model.profiles &&
        model.profiles.map((profile) => {
          const profileStats = getProfileActiveStats(profile, model);
          return (
            <React.Fragment key={profile.key}>
              {model.heroLevel !== undefined && (
                <React.Fragment>
                  {profile.effectiveQuantity && (
                    <span className="font-bold">
                      {profile.effectiveQuantity} *{" "}
                    </span>
                  )}
                  <span className="font-bold">{profile.name}</span>
                </React.Fragment>
              )}
              <div className="flex flex-row items-center space-x-8">
                <table className="table-fixed border-collapse border-spacing-0">
                  <thead>
                    <tr className="text-sm font-normal">
                      <th className="w-6 text-left">Mv</th>
                      <th className="w-14 text-center">F</th>
                      <th className="w-8 text-left">S</th>
                      <th className="w-8 text-left">D</th>
                      <th className="w-8 text-left">A</th>
                      <th className="w-8 text-left">W</th>
                      <th className="w-8 text-left">C</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="">{profileStats.Mv}''</td>
                      <td className="text-center">
                        {profileStats.F1}/{profileStats.F2}+
                      </td>
                      <td className="">{profileStats.S}</td>
                      <td className="">{profileStats.D}</td>
                      <td className="">{profileStats.A}</td>
                      <td className="">{profileStats.W}</td>
                      <td className="">{profileStats.C}</td>
                    </tr>
                  </tbody>
                </table>
                {profileStats.Mi !== undefined &&
                  profileStats.Wi !== undefined &&
                  profileStats.Fa !== undefined && (
                    <table>
                      <thead>
                        <tr>
                          <th className="">M</th>
                          <th className="">W</th>
                          <th className="">F</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="">
                            <HeroAttributeRenderer value={profileStats.Mi} />
                          </td>
                          <td className="">
                            <HeroAttributeRenderer value={profileStats.Wi} />
                          </td>
                          <td className="">
                            <HeroAttributeRenderer value={profileStats.Fa} />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  )}
              </div>
            </React.Fragment>
          );
        })}
    </div>
  );
};
