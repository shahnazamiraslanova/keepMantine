import React, { lazy, Suspense } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import MainLayout from '../../ui/layouts/MainLayout'; 
import {Routes} from "./RoutesEnum";
const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

const TasksPage = lazy(() => import('../../ui/modules/tasks/TasksPage'));
const TasksInExecutionPage = lazy(() => import('../../ui/modules/tasks-in-execute/TasksInExecutePage'));
const TasksInPendingPage = lazy(() => import('../../ui/modules/tasks-in-pending/TaskInPendingPage'));
const InfoPage = lazy(() => import('../../ui/modules/info/InfoPage'));
const ReportPage = lazy(() => import('../../ui/modules/report/ReportPage'));

const AppRoutes: React.FC = () => {
  const routesConfig: RouteObject[] = [
    {
      path: '/',
      element: <MainLayout />, 
      children: [
        {
          path: Routes.default,
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <TasksPage />
            </Suspense>
          ),
        },
        {
          path: Routes.tasks,
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <TasksPage />
            </Suspense>
          ),
        },
        {
          path: Routes.tasksInExecution,
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <TasksInExecutionPage />
            </Suspense>
          ),
        },
        {
          path: Routes.tasksInPending,
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <TasksInPendingPage />
            </Suspense>
          ),
        },
        {
          path: Routes.info,
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <InfoPage />
            </Suspense>
          ),
        },
        {
          path: Routes.report,
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <ReportPage />
            </Suspense>
          ),
        },
        {
          path: '*',
          element: (
            <div className="flex items-center justify-center h-screen">
              <h1 className="text-4xl font-bold text-primary">404 Not Found</h1>
            </div>
          ),
        },
      ],
    },
  ];

  const routes = useRoutes(routesConfig);
  return routes;
};

export default AppRoutes;
