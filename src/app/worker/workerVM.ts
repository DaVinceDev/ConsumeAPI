import { Injectable } from "@angular/core";

export interface WorkerVM{
    fullName: string,
    username: string,
    email: string,
    age: number,
    passwordHash: string,
    description: string,
    tags: string[],
    contact: number,
}