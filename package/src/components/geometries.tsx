import { GeometryProps } from '../types/props';
import React, { FC } from 'react';
import * as THREE from 'three';

export type BoxGeometryProps = GeometryProps<typeof THREE.BoxGeometry>;
export type CapsuleGeometryProps = GeometryProps<typeof THREE.CapsuleGeometry>;

export const BoxGeometry: FC<BoxGeometryProps> = () => <></>;
export const CapsuleGeometry: FC<CapsuleGeometryProps> = () => <></>;

export type BufferGeometryProps = GeometryProps<typeof THREE.BufferGeometry>;
export const BufferGeometry: FC<BufferGeometryProps> = () => <></>;

export type PlaneGeometryProps = GeometryProps<typeof THREE.PlaneGeometry>;
export const PlaneGeometry: FC<PlaneGeometryProps> = () => <></>;
