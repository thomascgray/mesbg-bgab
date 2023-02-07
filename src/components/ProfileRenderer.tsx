import { iHeroModelInArmy, iModelInArmy } from "../data/models";
import {
  getActiveWargear,
  getModelActiveData,
  getProfileActiveData,
} from "../utils";
import { HeroAttributeRenderer } from "./HeroAttributeRenderer";
import React from "react";
import _ from "lodash";
import classnames from "classnames";
import { PlusCircle, ChevronUp, ChevronDown } from "../icons";
export interface iProfileRendererProps {
  model: iHeroModelInArmy | iModelInArmy;
}
import * as State from "../state";

export const ProfileRenderer = (props: iProfileRendererProps) => {
  const { model } = props;
  const activeWargearNames = getActiveWargear(model, {
    excludeDefault: true,
  }).map((w) => w.name);

  const activeModelData = getModelActiveData(model);

  return (
    <div>
      <div>
        <span
          className={classnames({
            "font-bold": activeModelData.heroLevel !== undefined,
          })}
        >
          {activeModelData.name}
        </span>
        {activeModelData.heroLevel === undefined && (
          <span> * {activeModelData.quantity}</span>
        )}
        {activeWargearNames.length >= 1 && (
          <span
            className={classnames("ml-1", {
              "font-bold": activeModelData.heroLevel !== undefined,
            })}
          >
            w/ {activeWargearNames.join(", ")}
          </span>
        )}
      </div>

      {/* if a model DOESNT have profiles, just render out effectively 1 profile "block" */}
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
                <td className="">{activeModelData.stats!.Mv}''</td>
                <td className="text-center">
                  {activeModelData.stats!.F1}/{activeModelData.stats!.F2}+
                </td>
                <td className="">{activeModelData.stats!.S}</td>
                <td className="">{activeModelData.stats!.D}</td>
                <td className="">{activeModelData.stats!.A}</td>
                <td className="">{activeModelData.stats!.W}</td>
                <td className="">{activeModelData.stats!.C}</td>
              </tr>
            </tbody>
          </table>
          {activeModelData.stats!.Mi !== undefined &&
            activeModelData.stats!.Wi !== undefined &&
            activeModelData.stats!.Fa !== undefined && (
              <table>
                <thead>
                  <tr>
                    <th className="">M</th>
                    {activeModelData.allowPurchaseMi && <th></th>}
                    <th className="">W</th>
                    {activeModelData.allowPurchaseWi && <th></th>}
                    <th className="">F</th>
                    {activeModelData.allowPurchaseFa && <th></th>}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-3">
                      <div className="flex flex-row">
                        <HeroAttributeRenderer
                          value={
                            activeModelData.stats!.Mi +
                            (activeModelData.extraMi || 0)
                          }
                        />
                      </div>
                    </td>
                    {activeModelData.allowPurchaseMi && (
                      <td className="">
                        <div className="flex flex-col">
                          <button
                            onClick={() =>
                              State.increaseHeroicStat(
                                model as iHeroModelInArmy,
                                "mi"
                              )
                            }
                            className="bg-red-200"
                          >
                            <ChevronUp />
                          </button>
                          <button
                            onClick={() =>
                              State.decreaseHeroicStat(
                                model as iHeroModelInArmy,
                                "mi"
                              )
                            }
                            className="bg-red-200"
                          >
                            <ChevronDown />
                          </button>
                        </div>
                      </td>
                    )}
                    <td className="px-3">
                      <HeroAttributeRenderer
                        value={
                          activeModelData.stats!.Wi +
                          (activeModelData.extraWi || 0)
                        }
                      />
                    </td>
                    {activeModelData.allowPurchaseMi && (
                      <td className="">
                        <div className="flex flex-col">
                          <button
                            onClick={() =>
                              State.increaseHeroicStat(
                                model as iHeroModelInArmy,
                                "wi"
                              )
                            }
                            className="bg-red-200"
                          >
                            <ChevronUp />
                          </button>
                          <button
                            onClick={() =>
                              State.decreaseHeroicStat(
                                model as iHeroModelInArmy,
                                "wi"
                              )
                            }
                            className="bg-red-200"
                          >
                            <ChevronDown />
                          </button>
                        </div>
                      </td>
                    )}
                    <td className="px-3">
                      <HeroAttributeRenderer
                        value={
                          activeModelData.stats!.Fa +
                          (activeModelData.extraFa || 0)
                        }
                      />
                    </td>
                    {activeModelData.allowPurchaseMi && (
                      <td className="">
                        <div className="flex flex-col">
                          <button
                            onClick={() =>
                              State.increaseHeroicStat(
                                model as iHeroModelInArmy,
                                "fa"
                              )
                            }
                            className="bg-red-200"
                          >
                            <ChevronUp />
                          </button>
                          <button
                            onClick={() =>
                              State.decreaseHeroicStat(
                                model as iHeroModelInArmy,
                                "fa"
                              )
                            }
                            className="bg-red-200"
                          >
                            <ChevronDown />
                          </button>
                        </div>
                      </td>
                    )}
                  </tr>
                </tbody>
              </table>
            )}
        </div>
      )}

      {/* if it DOES have profiles, render out a block for each, taking into 
      account the "active" version of any given profile */}
      {model.profiles &&
        model.profiles.map((profile) => {
          const profileData = getProfileActiveData(profile, model);
          return (
            <React.Fragment key={profile.key}>
              <span>{profileData.name}</span>
              {profile.effectiveQuantity != null &&
                profile.effectiveQuantity >= 1 && (
                  <span> * {profile.effectiveQuantity}</span>
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
                      <td className="">{profileData.stats?.Mv}''</td>
                      <td className="text-center">
                        {profileData.stats?.F1}/{profileData.stats?.F2}+
                      </td>
                      <td className="">{profileData.stats?.S}</td>
                      <td className="">{profileData.stats?.D}</td>
                      <td className="">{profileData.stats?.A}</td>
                      <td className="">{profileData.stats?.W}</td>
                      <td className="">{profileData.stats?.C}</td>
                    </tr>
                  </tbody>
                </table>
                {profileData.stats?.Mi !== undefined &&
                  profileData.stats?.Wi !== undefined &&
                  profileData.stats?.Fa !== undefined && (
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
                            <HeroAttributeRenderer
                              value={profileData.stats?.Mi}
                            />
                          </td>
                          <td className="">
                            <HeroAttributeRenderer
                              value={profileData.stats?.Wi}
                            />
                          </td>
                          <td className="">
                            <HeroAttributeRenderer
                              value={profileData.stats?.Fa}
                            />
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
