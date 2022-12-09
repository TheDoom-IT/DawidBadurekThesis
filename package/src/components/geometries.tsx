import { GeometryProps } from "../types/props";
import React from 'react';
import * as THREE from 'three';

export type BoxGeometryProps = GeometryProps<typeof THREE.BoxGeometry, THREE.BoxGeometry>;
export type CapsuleGeometryProps = GeometryProps<typeof THREE.CapsuleGeometry, THREE.CapsuleGeometry>

export const BoxGeometry = (props: BoxGeometryProps) => <></>
export const CapsuleGeometry = (props: CapsuleGeometryProps) => <></>

export type BufferGeometryProps = GeometryProps<typeof THREE.BufferGeometry, THREE.BufferGeometry>

export const BufferGeometry = (props: BufferGeometryProps) => <></>

