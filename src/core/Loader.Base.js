/**
 * @Author: Caven
 * @Date: 2020-05-09 13:19:53
 */

import { Util, DomUtil, PlotUtil } from './utils'

import {
  MouseEventType,
  SceneEventType,
  LayerEventType,
  OverlayEventType,
  Event
} from './event'

import { LayerType, Layer } from './layer'
import { OverlayType, Overlay } from './overlay'
import ImageryType from './imagery/ImageryType'
import TerrainType from './terrain/TerrainType'
import WidgetType from './widget/WidgetType'
import MouseMode from './option/MouseMode'
import State from './state/State'
import Position from './position/Position'
import { Transform, CoordTransform } from './transform'
import Parse from './parse/Parse'

const base = {
  Util,
  DomUtil,
  PlotUtil,
  State,
  Event,
  ImageryType,
  TerrainType,
  LayerType,
  OverlayType,
  MouseEventType,
  SceneEventType,
  LayerEventType,
  OverlayEventType,
  WidgetType,
  MouseMode,
  Layer,
  Overlay,
  Position,
  Transform,
  T: Transform,
  CoordTransform,
  Parse,
  P: Parse
}

DC.mixin(base)
